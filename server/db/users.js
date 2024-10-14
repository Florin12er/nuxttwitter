import prisma from ".";
import bcrypt from "bcryptjs";

export const createUser = async (userData) => {
  const passwordHash = await bcrypt.hash(userData.password, 10);

  const finalUserData = {
    ...userData,
    password: passwordHash,
  };

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};

export const getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};
export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
