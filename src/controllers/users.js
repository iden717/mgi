const User = require("../../models/users");
exports.getUser = async (req, res) => {
  try {
    User.find(req.body)
      .then(function (result) {
        res.send(result);
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send({
          status: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
};
exports.addUser = async (req, res) => {
  try {
    User.create(req.body)
      .then(function (result) {
        res.send({
          data: result,
        });
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send({
          status: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    User.findOneAndRemove({ _id: req.params.id })
      .then(function (result) {
        res.send({
          message: `Success delete`,
        });
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send({
          status: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function (result) {
        const update = User.findById({ _id: req.params.id }).then(function (
          resultak
        ) {
          res.send({
            message: `Success Update`,
            data: resultak,
          });
        });
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send({
          status: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
};
