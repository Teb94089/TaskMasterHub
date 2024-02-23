const PricingPlan = require('../models/PricingPlan');

exports.getAllPlans = async (req, res) => {
    try {
        const plans = await PricingPlan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPlan = async (req, res) => {
    const planData = req.body;

    try {
        const newPlan = await PricingPlan.create(planData);
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePlan = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedPlan = await PricingPlan.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(updatedPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePlan = async (req, res) => {
    const { id } = req.params;

    try {
        await PricingPlan.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

