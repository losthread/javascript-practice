function splitLogs(logs, slug) {

  let i = 0;
  for (let log of logs) {
    if (log.includes(slug)) {
      break;
    }
    i++;
  }

  const object = {
    before: logs.slice(0, 3),
    after: logs.slice(i + 1),
    i: i,
  };

  return object;
}

let logs = ["error at line 10",
            "warning at line 15",
            "the dev who wrote line 21 should be fired",
            "debug info",
            "error at line 30",
            "user login"];
        
let slug = "debug";

console.log(splitLogs(logs, slug));