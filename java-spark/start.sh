#! /bin/bash

BUCKET_NAME=hd-labs-artifacts
VM_NAME=javasample

gsutil mb gs://${BUCKET_NAME}
gsutil cp ./target/hellospark-jar-with-dependencies.jar gs://hd-labs-artifacts/hellospark.jar

gcloud compute firewall-rules create ${VM_NAME}-www --allow tcp:4567 --target-tags ${VM_NAME}

gcloud compute instances create ${VM_NAME} \
  --tags ${VM_NAME} \
  --zone us-central1-a  --machine-type n1-standard-1 \
  --metadata-from-file startup-script=install.sh

#gcloud compute copy-files ./target/hellospark-jar-with-dependencies.jar ${VM_NAME}-www
