const observerTarget = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) fetchData();
    },
    { threshold: 1 }
  );

  if (observerTarget.current) {
    observer.observe(observerTarget.current);
  }

  return () => {
    if (observerTarget.current) {
      observer.unobserve(observerTarget.current);
    }
  };
}, [observerTarget]);

//2nd method for infinte scroll
const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop !=
      document.documentElement.offsetHeight ||
    isLoading
  )
    return;
  fetchData();
};


const observer = new IntersectionObserver((entries) => {
  if(entries[0].isIntersecting) callFunc()
}, {threshold: 1})