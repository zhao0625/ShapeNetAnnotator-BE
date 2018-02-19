# ShapeNet++ Annotator Server
The project is being actively developing.

# Run
The server listens to port `3000`.

## Functions (APIs)
- Return (re-meshed) `.obj` file
  - `/file/obj/:category_id-:model_id-:remesh`: listens HTTP **GET** request and returns a file
    - `category_id`: category id or category name
    - `model_id`: model id
    - `remesh`: if re-meshed obj (only support "true" now)
    - separated with '-': e.g., Chair-12345-true
  - `/file/json/:category_id-:model_id`: listens HTTP **GET** request and returns a file
    - `category_id`: category id or category name
    - `model_id`: model id
- Save meta data and labeled obj
  - `/save/save_db`: listens HTTP **POST** request
    - (still under discussing)
  - `/save/save_obj`: listens HTTP **POST** request
    - (still under discussing)
- ..