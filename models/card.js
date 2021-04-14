import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    deckId: Number,
    name: String,
    type: String,
    phase: { type: String, default: "new" },
    inflections: [{name:String,inflection:String}],
    dueDate: { type: Date, default: new Date() },
    interval: { type: Number, default: 0 },
    learningStep: { type: Number, default: 1 },
    ease: Number,
    lapseCount: { type: Number, default: 0 },
    isSuspended: { type: Boolean, default: false }

});

const Card = mongoose.model('Card', cardSchema);

export default Card