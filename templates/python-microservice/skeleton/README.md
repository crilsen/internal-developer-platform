# ${{ values.name }}

${{ values.description }}

Run with Docker: `docker build -t ${{ values.name }} . && docker run -p 8000:8000 ${{ values.name }}`.
