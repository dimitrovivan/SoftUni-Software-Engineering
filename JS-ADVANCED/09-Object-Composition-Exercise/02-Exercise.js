function modify(obj) {

    if (obj.dizziness) {
        obj.levelOfHydrated += 0.1*obj.weight*obj.experience;
        obj.dizziness = false;
    }
    return obj;
}

console.log(modify({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));