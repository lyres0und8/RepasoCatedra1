const { request, response } = require("express");

// Models
const User = require("../models/user");

/**
 * Get all users
 */
const getUsers = async (req = request, res = response) => {
  try {
    // Validation for non-existent users
    const userCount = await User.count();

    if (userCount === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Create users
 */
const createUser = async (req = request, res = response) => {
  const { name, lastName } = req.body;

  try {
    // Validation for null fields
    if (!name || !lastName) {
      return res
        .status(400)
        .json({ message: "Name and lastName are required" });
    }

    // Validation for the max length of fields
    if (name.length > 255 || lastName.length > 255) {
      return res.status(400).json({
        message: "Name and lastName must be less than 255 characters",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Update user by ID
 */
const updateUser = async (req = request, res = response) => {
  const { id } = req.params;
  const { name, lastName } = req.body;

  try {
    // Validation for null fields
    if (!name || !lastName) {
      return res
        .status(400)
        .json({ message: "Name and lastName are required" });
    }

    // Validation for the max length of fields
    if (name.length > 255 || lastName.length > 255) {
      return res.status(400).json({
        message: "Name and lastName must be less than 255 characters",
      });
    }

    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "User not found" });
    }

    userToUpdate.name = name;
    userToUpdate.lastName = lastName;

    await userToUpdate.save();

    res.status(200).json(userToUpdate);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Delete user by ID
 */
const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const userToDelete = await User.findByPk(id);

    if (!userToDelete) {
      return res.status(404).json({ message: "User not found" });
    }

    await userToDelete.destroy();

    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
