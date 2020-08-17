# Hello Python (Container edition)

Simple python Hello World app for use in container demos. 

## Build & Publish to GCR.io

With `gcloud`

```
export PROJECT=$(gcloud config get-value project)
gcloud builds submit --tag gcr.io/${PROJECT}/hellopython
```

