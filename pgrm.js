const api_url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=lieux-de-tournage-a-paris&q=&rows=1000&facet=annee_tournage&facet=type_tournage&facet=nom_tournage&facet=nom_realisateur&facet=nom_producteur&facet=ardt_lieu&facet=date_debut&facet=date_fin";
try{
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error(error);
    }
async function gettitle(){
    let title = document.getElementById("NomTournage").value;
    const dataf = data.records.filter(record => record.fields.nom_tournage.toUpperCase().includes(title.toUpperCase()));
    const a = dataf;
    let s = "<table class=\"centerTable\" cellspacing=\"5\"> <tr> <th>Nom du film</th> <th>Réalisateur</th> <th>Producteur</th> <th>Date début</th> <th>Date fin</th> </tr>";
    do{
        a=a-1;
        s += "<tr> <td> <button type=\"button\" onclick=\"getMap(" + dataf[i].fields.geo_point_2d[0] + "," + dataf[i].fields.geo_point_2d[1] + ",\'" + dataf[i].fields.nom_tournage  + "\');\">" + dataf[i].fields.nom_tournage  + "</button></td><td>" + dataf[i].fields.nom_realisateur + "</td> <td>" + dataf[i].fields.nom_producteur + "</td> <td>" +dataf[i].fields.date_debut + "</td> <td>" + dataf[i].fields.date_fin + "</td> </tr>";
    }while(a!=0);
    s += "</table>";
    document.getElementById("print").innerHTML = s;
}
