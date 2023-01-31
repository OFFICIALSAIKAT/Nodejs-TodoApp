const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Ineuron Todo Project ");
};

exports.search = async (req,res) => {
    try {
        let data = await User.find(
            {
                "$or": [
                    {todo: {$regex:req.params.val}},
                    {task: {$regex:req.params.val}},
                    {createdAt: {$regex:req.params.val}}
                ]
            }
           
        )
        res.send(data)
    
       
    } catch (error) {
        console.log(error)
        res.status(401).send("Error")
    }
}

exports.createTodo = async (req, res) => {
  try {
    const { todo, task } = req.body;
    if (!todo || !task) {
      throw new Error("Both Todo And Task is required");
    }
    const user = await User.create({ todo, task });
    res.status(201).json({
      success: true,
      message: "Todo Created Sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getTodo = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Failed to update",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "user Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Failed to Delete",
    });
  }
};
