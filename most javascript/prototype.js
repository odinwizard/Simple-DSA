let faang = {
    name: "google",
    salary: function() {
        console.log("500k salary");
    },
};

let engineer = Object.create(faang,{
    taskAssigned: { value: 2},
});

console.log(engineer);