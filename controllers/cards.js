import Card from '../models/card.js'

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find();

        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
    res.send('THIS WORKS');
}

export const createCard = async (req, res) => {
    const card = req.body;
    console.log(card)
    const newCard = new Card(card);

    try {
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}