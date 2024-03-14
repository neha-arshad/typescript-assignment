let flower_name: string[] = ["red rose" , "pink rose", "white rose"]


flower_name.unshift("lily");
flower_name.splice(2,0, "black rose");
flower_name.push("rose");


console.log(flower_name);