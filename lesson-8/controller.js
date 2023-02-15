import Pet from './Pet.js';

export async function getAllPets(req, res) {
   try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
   res.status(500).json({ error: error.message})
  }
}

export async function addNewPet(req,res) {
    try {
      const { name, type, age } = req.body;

    const pet = { 
        name,
        type,
        age,
    };

    const petDB = await Pet.create(pet);

    res.json(petDB);  
    } catch (err) {
        res.status(500).json({ error: eroor.message})
    }
    
}

export async function getPetByType(req, res) {
   const { type } = req.params;
   const pet = await Pet.find({ type});

   res.json(pet)
}

export async function getPetByAgeDescending(req, res) {
    const { age } = req.params;
    const pet = await Pet.find({ age: { $gt: age }});

    res.json(pet);
}