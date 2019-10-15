// this input variable will allow to select all inputs on the page
const inputs = document.querySelectorAll(".controls input");

//this function will allow us to change/update our values when the input values have been changed
function handleUpdate() {
  //when we log the values, it wont return the suffix "px", but just number
  //by having the data attribute inside the HTML we are able to grab its suffix value since we created that dataset
  //   console.log(this.value);

  // in our case the dataset we named is called sizing which we set the value of "px"
  //   console.log(this.dataset);

  //now we will assign the suffix to a variable, and because not all of our input have the dataset of data-sizing, we would have to account for that as well, because if we dont, undefined will be appended in the end of its value
  const suffix = this.dataset.sizing || "";
  //   console.log(suffix);

  //because we gave each input a name to match our CSS variable, we can use that to set its value in JS by selecting its name
  console.log(this.name);
  //since I wanted the height and width of the image to be proportional and not identical i had to create 2 names and individually set each values, since width should have a greater value i set the property of its value to be 1.5X greater and kept the same value for the height
  if (this.name.includes("imgW")) {
    console.log("hello");

    let imgW = parseInt(this.value) * 1.5;
    console.log(imgW);
    document.documentElement.style.setProperty(`--imgW`, imgW + suffix);
    document.documentElement.style.setProperty(`--imgH`, this.value + suffix);
  }
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  //above we select this.name, because it will give us back the value of the name of the input the mouse moves over "baseColor, spacing, blur, imgSize", which is the same name as our variable, then we set the values of that to the variable including the suffix
}

//to listen to changes on each of our inputs we will loop through all of them via the ForEach method
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
