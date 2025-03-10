export const getTimeAgo = (createdDate: string) => {
  const created = new Date(createdDate);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1000 * 60));

  if (diffInMinutes < 60) {
    return `${diffInMinutes}M AGO`;
  } else {
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}H AGO`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 30) {
        return `${diffInDays}D AGO`;
      }
    }
  }
};
