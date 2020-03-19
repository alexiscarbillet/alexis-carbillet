library(jsonlite)
library(dplyr)
library(leaflet)

# From http://data.okfn.org/data/datasets/geo-boundaries-world-110m
geojson <- readLines("https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson", warn = FALSE) %>%
  paste(collapse = "\n") %>%
  fromJSON(simplifyVector = FALSE)

# Default styles for all features
geojson$style = list(
  weight = 1,
  color = "#555555",
  opacity = 1,
  fillOpacity = 0.8
)


# Access to the name
names <- sapply(geojson$features, function(feat) {
  feat$properties$name
})

esp=c("Argentina","Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Puerto Rico", "Uruguay", "Venezuela","Spain")
ru=c("Russia","Belarus", "Kyrgyzstan","Kazakhstan")
po=c("Portugal","Brazil","Angola","Mozambique","Guinea-Bissau","East Timor", "Macau", "Cape Verde", "São Tomé and Príncipe")
en=c("Canada","United States","United Kingdom","Ireland","Malta","Jamaica","Barbados","Bahamas","Trinidad and Tobago","Guyana","Australia","New Zealand","Fiji","Papua New Guinea","Samoa","Tonga","Solomon Islands","Micronesia","Vanuatu","Kiribati","India","Pakistan","Singapore","Philippines","Sri Lanka","Malaysia","South Africa","Nigeria","Cameroon","Kenya","Zimbabwe","Ghana","Rwanda","Sudan","Botswana","Ethiopia")
fr=c("France","Dem. Rep. Congo", "Madagascar","Cameroon","Ivory Coast","Niger","Burikina Faso","Mali","Senegal","Chad","Guinea","Rwanda","Belgium","Burundi","Benin","Haiti","Switzerland","Togo","Congo","Central African Rep.","Gabon","Djibouti","Eq. Guinea","Comoros","Luxembourg","Vanuatu","Seychelles","Monaco")
pal <- function(n){
  if(n %in% en){
    return("#0000ff")
  }
  if(n %in% esp){
    return("#008000")
  }
  if(n %in% fr){
    return("#000080")
  }
  if(n %in% po){
    return("#ff7f00")
  }
  if(n %in% ru){
    return("#800000")
  }
  else{
    return("#808080")
  }
}

# Add a properties$style list to each feature
geojson$features <- lapply(geojson$features, function(feat) {
  feat$properties$style <- list(
    fillColor = pal(feat$properties$name)
  )
  feat
})

# Add the now-styled GeoJSON object to the map
leaflet() %>% addGeoJSON(geojson)