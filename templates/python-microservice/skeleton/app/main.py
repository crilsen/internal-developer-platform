from fastapi import FastAPI

app = FastAPI(title="${{ values.name }}")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/")
def root():
    return {"service": "${{ values.name }}", "status": "running"}
