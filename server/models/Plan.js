import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
	{
		any: {},
		user: {
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		}
	},
	{ strict: false }
);

export default mongoose.model('Plan', planSchema);
