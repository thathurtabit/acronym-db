const Acronym = require("../models/acronyms-model");

createAcronym = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a acronym",
    });
  }

  const acronym = new Acronym(body);
  acronym.id = acronym._id;

  if (!acronym) {
    return res.status(400).json({ success: false, error: err });
  }

  acronym
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: acronym._id,
        message: "Acronym created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Acronym not created!",
      });
    });
};

updateAcronym = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Acronym.findOne({ _id: req.params.id }, (err, acronym) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Acronym not found!",
      });
    }
    acronym.name = body.name;
    acronym.title = body.title;
    acronym.description = body.description;
    acronym.link = body.link;
    acronym.author = body.author;

    acronym
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: acronym._id,
          message: "Acronym updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Acronym not updated!",
        });
      });
  });
};

deleteAcronym = async (req, res) => {
  await Acronym.findOneAndDelete({ _id: req.params.id }, (err, acronym) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!acronym) {
      return res
        .status(404)
        .json({ success: false, error: `Acronym not found` });
    }

    return res.status(200).json({ success: true, data: acronym });
  }).catch((err) => console.log(err));
};

getAcronymById = async (req, res) => {
  await Acronym.findOne({ _id: req.params.id }, (err, acronym) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!acronym) {
      return res
        .status(404)
        .json({ success: false, error: `Acronym not found` });
    }
    return res.status(200).json({ success: true, data: acronym });
  }).catch((err) => console.log(err));
};

getAcronyms = async (req, res) => {
  await Acronym.find({}, (err, acronyms) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!acronyms?.length) {
      return res
        .status(404)
        .json({ success: false, error: `Acronym not found` });
    }
    return res.status(200).json({ success: true, data: acronyms });
  }).catch((err) => console.log(err));
};

module.exports = {
  createAcronym,
  updateAcronym,
  deleteAcronym,
  getAcronyms,
  getAcronymById,
};
