"use client";
import { Platform } from "@/app/constants/platforms";
import { CreatePlatformSchema } from "@/app/validationSchemas/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlatformType } from "@prisma/client";
import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import {
  FieldErrors,
  useFieldArray,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

type PlatformFormData = z.infer<typeof CreatePlatformSchema>;

interface PlatformEditingContextType {
  platforms: Platform[];
  appendPlatform: () => void;
  removePlatform: (index: number) => void;
  allPlatformsTaken: boolean;
  handleReorder: (newPlatforms: Platform[]) => void;
  handlePlatformChange: (index: number, platformType: PlatformType) => void;
  avilablePlatforms: PlatformType[];
  register: UseFormRegister<PlatformFormData>;
  errors: FieldErrors<PlatformFormData>;
  handleSubmit: UseFormHandleSubmit<PlatformFormData>;
  isValid: boolean;
}

export const PlatformEditingContext = createContext<PlatformEditingContextType>(
  {} as PlatformEditingContextType
);

const PlatformEditingContextProvider = ({ children }: PropsWithChildren) => {
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
    getValues,
  } = useForm<PlatformFormData>({
    resolver: zodResolver(CreatePlatformSchema),
  });

  const {
    fields: platforms,
    append,
    remove,
    swap,
    update,
    prepend,
  } = useFieldArray<PlatformFormData>({
    control,
    name: "platforms",
  });

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

  useEffect(() => {
    axios.get<Platform[]>("/api/platform").then((platforms) => {
      setValue("platforms", platforms.data);
    });
  }, []);

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
    allPlatformsTaken,
    handleReorder,
    handlePlatformChange,
    avilablePlatforms,
    register,
    errors,
    handleSubmit,
    isValid,
  };

  return (
    <PlatformEditingContext.Provider value={linkEditingContextValue}>
      {children}
    </PlatformEditingContext.Provider>
  );
};

export default PlatformEditingContextProvider;

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
