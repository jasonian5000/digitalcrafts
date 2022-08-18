# prop drilling

  // Version 1
  // This will run one time and will always run if the dom is updated
  // useEffect(() => {
  // }, []);
  // Version 2
  // This will run one time and will run if the state variable is updated or the dome is updated
  // useEffect(() => {
  // }, [state]);
  // Version 3
  // This will run one time and then one more time when the dom updates and that's it
  // useEffect(() => {
  // },);