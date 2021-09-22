export default function handler(req, res) {
  // Get data from your database
  res.status(200).json([
      { 'name': 'Hydrogen'},
      { 'name': 'Helium'},
      { 'name': 'Lithium'},
      { 'name': 'Boron'},
      { 'name': 'Carbon'},
      { 'name': 'Nitrogen'},
      { 'name': 'Oxygen'},
      { 'name': 'Fluorine'},
      { 'name': 'Sodium'},
      { 'name': 'Aluminium'},
      { 'name': 'Silicon'},
      { 'name': 'Phosphorus'},
      { 'name': 'Sulfur'},
      { 'name': 'Chlorine'},
      { 'name': 'Potassium'},
      { 'name': 'Gallium'},
      { 'name': 'Germanium'},
      { 'name': 'Arsenic'},
      { 'name': 'Selenium'},
      { 'name': 'Bromine'},
      { 'name': 'Rubidium'},
      { 'name': 'Indium'},
      { 'name': 'Tin'},
      { 'name': 'Antimony'},
      { 'name': 'Tellurium'},
      { 'name': 'Iodine'},
      { 'name': 'Cesium'},
      { 'name': 'Thallium'},
      { 'name': 'Lead'},
      { 'name': 'Bismuth'},
      { 'name': 'Polonium'},
      { 'name': 'Astatine'},
      { 'name': 'Nihonium'},
      { 'name': 'Flerovium'},
      { 'name': 'Moscovium'},
      { 'name': 'Livermorium'}
      // { 'name': 'Tennessine' }
    ]
  )
}