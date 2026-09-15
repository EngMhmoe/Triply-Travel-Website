export  const formatDate = (dateRange) => {
    
  const currentYear = new Date().getFullYear();

  const [checkIn, checkOut] = dateRange.split(" - ");

    return {
      checkIn: `${checkIn} ${currentYear}`,
      checkOut: `${checkOut} ${currentYear}`,
    };
  };
