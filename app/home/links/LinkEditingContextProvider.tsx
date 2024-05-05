"use client";
import { Link } from "@/app/constants/links";
import { PlatformType } from "@/app/constants/platforms";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface LinkEditingContextType {
  handleLinkValueChange: (value: string, linkId: string) => void;
  handlePlatformChange: (platformType: PlatformType, linkId: string) => void;
  handleLinkRemove: (linkId: string) => void;
  handleAddNewLink: () => void;
  handleSave: () => void;
  handleReorder: (newLinks: Link[]) => void;
  takenPlatforms: PlatformType[];
  links: Link[];
  allPlatformsTaken: boolean;
}

export const LinkEditingContext = createContext<LinkEditingContextType>(
  {} as LinkEditingContextType
);

const LinkEditingContextProvider = ({ children }: PropsWithChildren) => {
  const [links, setLinks] = useState<Link[]>([]);
  const [takenPlatforms, setTakenPlatforms] = useState<PlatformType[]>([]);

  const allPlatformsTaken =
    takenPlatforms.length == Object.values(PlatformType).length;

  const handleLinkValueChange = (value: string, linkId: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === linkId ? { ...link, link: value } : link
      )
    );
  };

  const handlePlatformChange = (platformType: PlatformType, linkId: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === linkId ? { ...link, platformType } : link
      )
    );
  };

  const handleLinkRemove = (linkId: string) => {
    const newUserLinks = [...links].filter((link) => link.id !== linkId);
    setLinks(newUserLinks);
  };

  const handleAddNewLink = () => {
    if (allPlatformsTaken) return;
    const avliablePlatoform = Object.values(PlatformType).filter(
      (platform) => !takenPlatforms.includes(platform)
    )[0];
    setLinks((prevUserLinks) => [
      ...prevUserLinks,
      {
        id: uuidv4(),
        link: "",
        platformType: avliablePlatoform,
      },
    ]);
  };

  const handleSave = () => {
    // Logic to save the links
  };

  const handleReorder = (newLinks: Link[]) => {
    console.log(newLinks);
    setLinks(newLinks);
  };

  useEffect(() => {
    updateTakenPlatforms();
  }, [links]);

  const updateTakenPlatforms = () => {
    setTakenPlatforms([...links].map((link) => link.platformType));
  };

  const linkEditingContextValue = {
    handleAddNewLink,
    handleLinkRemove,
    handleLinkValueChange,
    handlePlatformChange,
    handleSave,
    handleReorder,
    takenPlatforms,
    links: links,
    allPlatformsTaken,
  };

  return (
    <LinkEditingContext.Provider value={linkEditingContextValue}>
      {children}
    </LinkEditingContext.Provider>
  );
};

export default LinkEditingContextProvider;
