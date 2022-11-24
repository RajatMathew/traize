
#include "DHT.h"

#define DHTPIN 4 
#define DHTTYPE DHT11  
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));

  dht.begin();
}

void loop() {
 
  delay(1000);

  float h = dht.readHumidity();

  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();


 
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

 
  Serial.print("h");
  Serial.print(h);
 
  Serial.print("t");
  Serial.print(t);

  Serial.println("");

}