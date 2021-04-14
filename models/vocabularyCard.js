import mongoose from 'mongoose';

const vocabularySchema = mongoose.Schema({
    name: String,
    type: String
});

const VocabularyCard = mongoose.model('VocabularyCard',vocabularySchema)

export default VocabularyCard