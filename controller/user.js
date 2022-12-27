import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send({
      success: true,
      users: user,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      users: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const searchUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).send({
      success: true,
      users: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      users: error.message,
    });
  }
};
export const uptadeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      users: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      users: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      users: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      users: error.message,
    });
  }
};
