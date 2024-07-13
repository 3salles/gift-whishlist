import { IGift } from "../types/gifts.type";

const  sortByLinkPresence = (gifts: IGift[]): IGift[] => {
  gifts.sort((a, b) => {
    if (a.link && !b.link) {
      return -1;
    }

    if (!a.link && b.link) {
      return 1;
    }

    return 0;
  });

  return gifts;
}

export default sortByLinkPresence