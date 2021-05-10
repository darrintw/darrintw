#include <IRremote.h>

int irrecv = A1;
IRrecv irrecv_irrecv(irrecv);
decode_results results_irrecv;

void setup() {
  irrecv_irrecv.enableIRIn();
}

void loop() {

}
