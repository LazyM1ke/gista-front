const getPhoneMaskPattern = (currentPhone: string) => {
  const value = currentPhone;
  const currentIndex = [...currentPhone][0] === "+" ? 1 : 0;
  const maxValue = 11 + currentIndex;
  const indexes = [
    [0, 1 + currentIndex],
    [currentIndex + 1, 4 + currentIndex],
    [currentIndex + 4, 7 + currentIndex],
    [currentIndex + 7, 9 + currentIndex],
    [currentIndex + 9, 11 + currentIndex],
    [currentIndex + 11, maxValue],
  ];
  let phoneValue = "";
  indexes.forEach((elem, index) => {
    if (index === 0) {
      phoneValue += `${value.substring(elem[0], elem[1])}`;
      return;
    }
    if (value.substring(elem[0], elem[1]) && index === 1) {
      phoneValue += `-(${value.substring(elem[0], elem[1])}`;
    }
    if (value.substring(elem[0], elem[1]) && index === 2) {
      phoneValue += `)-(${value.substring(elem[0], elem[1])}`;
    }
    if (value.substring(elem[0], elem[1]) && index === 3) {
      phoneValue += `)-${value.substring(elem[0], elem[1])}`;
    }
    if (value.substring(elem[0], elem[1]) && index > 3) {
      phoneValue += `-${value.substring(elem[0], elem[1])}`;
    }
  });

  return phoneValue.trim();
};

export default getPhoneMaskPattern;
