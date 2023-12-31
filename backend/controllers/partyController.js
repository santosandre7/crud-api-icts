import { Party } from '../models/Party.js';

export const PartyModel = Party;

const checkPartyBudget = (budget, services) => {

    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if (priceSum > budget) {
        return false;
    }

    return true;

};

const partyController = {
    create: async (req, res) => {
        try {

            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };

            if (party.services && !checkPartyBudget(party.budget, party.services)) {
                res.status(406).json({ msg: 'O seu orçamento é insuficiente' });
                return;
            }

            const response = await PartyModel.create(party);
            res.status(201).json({ response, msg: 'Festa criada com sucesso' });

        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {

            const party = await PartyModel.find();
            res.status(200).json(party);

        } catch (error) {
            console.log(error);
        }
    },

    get: async (req, res) => {
        try {

            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if (!party) {
                res.status(404).json({ msg: 'Festa não encontrada' });
                return;
            }

            res.status(200).json(party);

        } catch (error) {
            console.log(error);
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedParty = await PartyModel.findByIdAndDelete(id);

            if (!deletedParty) {
                res.status(404).json({ msg: 'Festa não encontrada' });
                return;
            }

            res.status(200).json({ deletedParty, msg: 'Festa apagada com sucesso' });

        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };

            if (party.services && !checkPartyBudget(party.budget, party.services)) {
                res.status(406).json({ msg: 'O seu orçamento é insuficiente' });
                return;
            }

            const updatedParty = await PartyModel.findByIdAndUpdate(id, party);

            if (!updatedParty) {
                res.status(404).json({ msg: 'Festa não encontrada' });
            }

            res.status(200).json({ party, msg: 'Festa atualizada com sucesso' });


        } catch (error) {
            console.log(error);
        }
    }
};


export default partyController;