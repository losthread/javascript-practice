function getCleanRank(reviewWords) {

  let rating = 0;

  if (reviewWords.includes("dang")) {
    console.log("has dang");
    rating++;
  }

  if (reviewWords.includes("shoot")) {
    console.log("has shoot");
    rating++;
  }

  if (reviewWords.includes("heck")) {
    console.log("has heck");
    rating++;
  }

  if (rating === 0)
    return "clean";

  else if (rating === 1)
    return "dirty";

  else 
    return "filthy";
}

const reviewWords = ["hello", "dang", "shoot", "heck"];
const rank = getCleanRank(reviewWords);
console.log(rank);