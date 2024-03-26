#include <WiFi.h>
#include <HTTPClient.h>


#include "DHT.h"

#define DHTPIN 23
#define DHTTYPE DHT22 

DHT dht(DHTPIN,DHTTYPE);

const char * ssid="progettotemperatura";

const char * wifipw="progettotemperatura";


float temperatura;
float umidita;


void setup(){
  Serial.begin(115200);
  startWifi();
  Serial.println("");
  Serial.println("WiFi connected.");
  delay (5000);


  dht.begin();
}

void loop() {
  HTTPClient http;
  
  temperatura = dht.readTemperature();

  
  String servername;
  servername += F("http://127.0.0.1:5000/add?aula=mm1&valore=");
  servername += String(temperatura, 6);
  Serial.println(servername);

  
  
  http.begin(servername);
  int httpCode = http.GET();
  http.end();
  Serial.println(httpCode);

  delay(6000);
   
  if(isnan(temperatura)){
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  
 
 Serial.println("Temperatura: ");
 Serial.println(temperatura);
 delay(2000);
}

void  startWifi(){
  WiFi.begin(ssid, wifipw);
  Serial.println("Connecting Wifi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
}
