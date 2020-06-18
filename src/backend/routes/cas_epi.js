const router = require('express').Router();
let cas_epi = require('../models/cas_epi.model');

///////////////////////  get la liste des cas dans le cas d'une epidemé
router.route('/').get((req, res) => {
  
   cas_epi.find({}).then(cas_epis =>
        {
          res.json(cas_epis)
        }
       )
    .catch(err =>
         res.status(400).json(
             'Error: la list des cas dans le cas dune epidemé pas disponible +++++' + err));
                                    });
//////////////////////// rechercher un cas dans le cas d'une epidemie
router.route('/:id').get((req, res) => {
  
  cas_epi.findById(req.params.id)
  .then(cas_epi => res.json(cas_epi))
  .catch(err => 
    res.status(400).json('Error: la recherche du cas epidemique nest pas effectuée :(' + err));
                                  });
//////////////////////// Ajouter un cas dans le cas d'une epidemie
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
  const Date_debut_Contamination= req.body.Date_debut_Contamination;
  const Date_fin_traitment= req.body.Date_fin_traitment;


  const newcas_epi= new compte({nss,nom,prenom,lieu_naissance,date_naissance,
    sexe,adresse,wilaya,hopital,Situation_actuelle,Date_debut_Contamination,Date_fin_traitment});

  newcas_epi.save()
    .then(() => res.json('nouveau cas_ epidemé added !'))
    .catch(err => res.status(400).json('Error: failed added cas_epidemé to BDD' + err));
                                        
                                        });
//////////////////////// updater un cas dans le cas d'une epidemie
router.route('/update/:id').post((req, res) => {
    cas_epi.findById(req.params.id)
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
                cas.Date_debut_Contamination= req.body.Date_debut_Contamination;
                cas.Date_fin_traitment= req.body.Date_fin_traitment;
                          ///////sauvgarder les modifications dans la BDD
               cas.save().then(() => res.json('CE cas EPIDEMIQUE est modifié!'))
               .catch(err => res.status(400).json('Error: Update cas epideme failed :(' + err));
            })
            .catch(err => res.status(400).json('Error: find by id est failed ' + err));
                                                });
////////////////////////////////////////////////////////
module.exports = router;