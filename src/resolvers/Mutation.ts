import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
// import { getUserId } from '../utils'

const signup = async (_parent, args, context, _info) => {
	const password = await bcrypt.hash(args.data.password, 10);

	const user = await context.prisma.createUser({ ...args.data, password });
	const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

	return {
		token,
		user,
		tokenExpiration: 1
	};
};

const login = async (_parent, args, context, _info) => {
	const user = await context.prisma.user({ email: args.data.email });

	if (!user) {
		throw new Error('No such user found');
	}

	const valid = await bcrypt.compare(args.data.password, user.password);

	if (!valid) {
		throw new Error('Invalid password');
	}

	const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
		expiresIn: '1h'
	});

	return {
		token,
		user,
		tokenExpiration: 1
	};
};

const verifyToken = async (_parent, args) => {
	const { token } = args.data;
	let valid: Boolean;

	try {
		jwt.verify(token, process.env.APP_SECRET);
		valid = true;
	} catch (err) {
		console.log(err);
		valid = false;
	}
	console.log(valid);
	return { valid };
};

// const post = (parent, args, context, info) => {
//   const userId = getUserId(context);
//   return context.prisma.createLink({
//     url: args.url,
//     description: args.description,
//     postedBy: { connect: { id: userId } }
//   });
// };

const Mutation = { signup, login, verifyToken };

export default Mutation;
