const router = require('express').Router();
let cas_cat = require('../models/cas_cat.model');

/////////////////// get tous les cas dans le cas de catastrophe
router.route('/').get((req, res) => {
  
  cas_cat.find({}).then(cas_cats =>
        {
          res.json(cas_cats)
        }
       )
    .catch(err =>
         res.status(400).json(
             'Error: la list des cas dans le cas dune catastrophe pas disponible +++++' + err));
});

//////////////////////// rechercher un cas dans le cas d'une catastrophe
router.route('/:id').get((req, res) => {
  
  cas_cat.findById(req.params.id)
  .then(cas_cat => res.json(cas_cat))
  .catch(err => 
    res.status(400).json('Error: la recherche du cas catastrophique nest pas effectuée :(' + err));
                                  });

///////////////////// Ajouter un cas dans le cas de catastrophe
router.route('/add').post((req, res) => {
  const nss = req.body.nss;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const lieu_naissance = req.body.lieu_naissance ;
  const date_naissance= req.body.date_naissance;
  const sexe= req.body.sexe;
  const adresse= req.body.adresse;
  const wilaya= req.body.wilaya;
  const hopital= req.body.nom_etablisement;
  const Situation_actuelle= req.body.Situation_actuelle;
  const Date_debut_blessure= req.body.Date_debut_blessure;
  const Date_fin_traitment= req.body.Date_fin_traitment;

  const newcas_cat= new cas_cat({nss,nom,prenom,lieu_naissance,date_naissance,
    sexe,adresse,wilaya,hopital,Situation_actuelle,Date_debut_blessure,Date_fin_traitment});

    newcas_cat.save()
    .then(() => res.json('nouveau cas_ catastrophique  added !'))
    .catch(err => res.status(400).json('Error: failed added cas_  catastrophique to BDD' + err));
});
//////////////////////// updater un cas dans le cas d'une catastrophe
router.route('/update/:id').post((req, res) => {
  cas_cat.findById(req.params.id)
   .then(
        cas => {     ////////modifier le cas    
              cas.nss = req.body.nss;
              cas.nom = req.body.nom;
              cas.prenom = req.body.prenom;
              cas.lieu_naissance = req.body.lieu_naissance ;
              cas.date_naissance= req.body.date_naissance;
              cas.sexe= req.body.sexe;
              cas.adresse= req.body.adresse;
              cas.wilaya= req.body.wilaya;
              cas.hopital= req.body.nom_etablisement;
              cas.Situation_actuelle= req.body.Situation_actuelle;
              cas.Date_debut_blessure= req.body.Date_debut_Contamination;
              cas.Date_fin_traitment= req.body.Date_fin_traitment;
                        ///////sauvgarder les modifications dans la BDD
             cas.save().then(() => res.json('CE cas catastrophique est modifié!'))
             .catch(err => res.status(400).json('Error: Update cas catastrophique failed :(' + err));
          })
          .catch(err => res.status(400).json('Error: find by id est failed  dans le cas catastrophique' + err));
                                              });
////////////////////////////////////////////////////////
module.exports = router;