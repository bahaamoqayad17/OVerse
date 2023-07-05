import { deleteAbout } from "@/store/AboutSlice";
import { deleteFaq } from "@/store/FaqSlice";
import { deleteFeature } from "@/store/FeatureSlice";
import { deleteTeam } from "@/store/TeamSlice";

export const resources = {
  teams: {
    headers: ["avatar", "name", "phone"],
    fields: ["avatar", "name", "call"],
    remove: deleteTeam,
  },
  features: {
    headers: ["title", "icon"],
    fields: ["title", "icon"],
    remove: deleteFeature,
  },
  faq: {
    headers: ["question"],
    fields: ["question"],
    remove: deleteFaq,
  },
  about: {
    headers: ["title", "icon"],
    fields: ["title", "icon"],
    remove: deleteAbout,
  },
  messages: {
    headers: ["name", "email", "subject", "message"],
    fields: ["name", "email", "subject", "message"],
  },
};
