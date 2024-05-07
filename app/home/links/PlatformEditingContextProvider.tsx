"use client";
import { Platform } from "@/app/constants/platforms";
import { warningToastOptions } from "@/app/constants/styles";
import { CreatePlatformSchema } from "@/app/validationSchemas/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlatformType } from "@prisma/client";
import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  useFieldArray,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

type PlatformFormData = z.infer<typeof CreatePlatformSchema>;

interface PlatformEditingContextType {
  platforms: Platform[];
  appendPlatform: () => void;
  removePlatform: (index: number) => void;
  handleReorder: (newPlatforms: Platform[]) => void;
  handlePlatformChange: (index: number, platformType: PlatformType) => void;
  avilablePlatforms: PlatformType[];
  register: UseFormRegister<PlatformFormData>;
  errors: FieldErrors<PlatformFormData>;
  handleSubmit: UseFormHandleSubmit<PlatformFormData>;
  onSubmit: (data: FieldValues) => Promise<void>;
  allPlatformsTaken: boolean;
  isValid: boolean;
  isLoading: boolean;
}

export const PlatformEditingContext = createContext<PlatformEditingContextType>(
  {} as PlatformEditingContextType
);

const PlatformEditingContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setLoading] = useState(true);
  const [avilablePlatforms, setAvilablePlatforms] = useState<PlatformType[]>(
    []
  );
  const {
    control,
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm<PlatformFormData>({
    resolver: zodResolver(CreatePlatformSchema),
  });

  const {
    fields: platforms,
    append,
    remove,
    swap,
    update,
  } = useFieldArray<PlatformFormData>({
    control,
    name: "platforms",
  });

  // Intialization
  useEffect(() => {
    setLoading(true);
    axios
      .get<Platform[]>("/api/platform")
      .then((platforms) => {
        setValue("platforms", platforms.data);
      })
      .catch((err) => {
        toast.error("An error occured while getting your links");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const watchAllPlatforms = watch("platforms");
  const allPlatformsTaken = avilablePlatforms.length == 0;

  const appendPlatform = () => {
    if (avilablePlatforms.length == 0) return;
    append(
      { id: uuidv4(), link: "", type: avilablePlatforms[0] },
      { shouldFocus: false }
    );
  };

  const removePlatform = (index: number) => {
    remove(index);
  };

  const handleReorder = (newPlatforms: Platform[]) => {
    const { indexA, indexB } = getSwapIndex(platforms, newPlatforms);
    swap(indexA, indexB);
  };

  const handlePlatformChange = (index: number, platformType: PlatformType) => {
    update(index, { ...watch("platforms")[index], type: platformType });
    updateAvliablePlatforms();
  };

  // Form submision
  const [canSave, setCanSave] = useState(true);

  const onSubmit = async (data: FieldValues) => {
    if (!canSave) {
      toast.error("Please wait before saving again", {
        ...warningToastOptions,
        duration: 2500,
      });
      return;
    }
    const createPlatformsPromise = axios.post("/api/platform", data);
    await toast.promise(createPlatformsPromise, {
      error: "An error occured while saving",
      loading: "Saving...",
      success: "Saved successfully",
    });
    saveCountDown();
  };

  const saveCountDown = () => {
    setCanSave(false);
    setTimeout(() => {
      setCanSave(true);
    }, 3000);
  };

  // Avilable platforms
  useEffect(() => {
    updateAvliablePlatforms();
  }, [watchAllPlatforms]);

  const updateAvliablePlatforms = () => {
    const takenPlatforms = [...platforms].map((field) => field.type);
    const newAvilablePlatforms = Object.values(PlatformType).filter(
      (platform) => !takenPlatforms.includes(platform)
    );
    setAvilablePlatforms(newAvilablePlatforms);
  };

  const linkEditingContextValue = {
    platforms: platforms as Platform[],
    appendPlatform,
    removePlatform,
    handleReorder,
    handlePlatformChange,
    avilablePlatforms,
    register,
    errors,
    handleSubmit,
    onSubmit,
    isValid,
    isLoading,
    allPlatformsTaken,
  };

  return (
    <PlatformEditingContext.Provider value={linkEditingContextValue}>
      {children}
    </PlatformEditingContext.Provider>
  );
};

export default PlatformEditingContextProvider;

// get swap index for reordering function
const getSwapIndex = (oldArr: any[], newArr: any[]) => {
  let indexA = 0,
    indexB = 0;
  for (let i = 0; i < oldArr.length; i++) {
    if (oldArr[i] != newArr[i]) {
      indexA = i;
      indexB = oldArr.indexOf(newArr[indexA]);
    }
  }
  return { indexA, indexB };
};
