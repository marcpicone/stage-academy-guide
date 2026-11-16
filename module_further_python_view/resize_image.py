# /// script
# requires-python = ">=3.11"
# dependencies = ["pillow>=11,<14"]
# ///

import argparse
from pathlib import Path

from PIL import Image


def resize_image(source_path: Path, output_path: Path, max_size: int) -> None:
    with Image.open(source_path) as source_image:
        original_width: int = source_image.width
        original_height: int = source_image.height
        result_image: Image.Image = source_image.convert("RGBA")
        result_image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        result_image.save(output_path, format="PNG")

    print(f"Source : {original_width} x {original_height} px")
    print(f"Résultat : {result_image.width} x {result_image.height} px")
    print(f"Image créée : {output_path.resolve()}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Créer une copie PNG réduite, sans déformer l’image."
    )
    parser.add_argument("source", type=Path, help="Chemin de l’image source")
    parser.add_argument("output", type=Path, help="Chemin du nouveau fichier PNG")
    parser.add_argument("--max-size", type=int, default=256, help="Côté maximal en pixels")
    args = parser.parse_args()

    if args.max_size <= 0:
        parser.error("La taille maximale doit être supérieure à zéro.")
    if args.output.suffix.lower() != ".png":
        parser.error("Le fichier de sortie doit avoir l’extension .png.")
    if args.source.resolve() == args.output.resolve():
        parser.error("La source et la sortie doivent être des fichiers différents.")
    if args.output.exists():
        parser.error("La sortie existe déjà. Choisis un nouveau nom pour la conserver.")

    try:
        resize_image(args.source, args.output, args.max_size)
    except OSError as error:
        parser.exit(1, f"Impossible de préparer l’image : {error}\n")


if __name__ == "__main__":
    main()
