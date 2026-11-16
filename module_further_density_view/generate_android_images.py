# /// script
# requires-python = ">=3.11"
# dependencies = ["pillow>=11,<14"]
# ///

import argparse
from pathlib import Path

from PIL import Image
from resize_image import resize_image


def generate_android_images(source_path: Path, output_dir: Path) -> None:
    density_sizes: dict[str, int] = {
        "mdpi": 96,
        "hdpi": 144,
        "xhdpi": 192,
        "xxhdpi": 288,
        "xxxhdpi": 384,
    }

    with Image.open(source_path) as source_image:
        if source_image.format != "PNG":
            raise ValueError("Pour cet exercice, utilise une vraie image PNG.")
        if source_image.width != source_image.height:
            raise ValueError("La source doit être carrée pour notre illustration de 96 dp.")
        if source_image.width < 384:
            raise ValueError("La source doit mesurer au moins 384 x 384 pixels.")

    output_dir.mkdir(parents=True, exist_ok=False)
    for density, size in density_sizes.items():
        output_path: Path = output_dir / f"drawable-{density}" / "quiz_illustration.png"
        resize_image(source_path, output_path, size)

    print(f"Cinq variantes créées dans : {output_dir.resolve()}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Préparer les cinq variantes Android d’une illustration carrée de 96 dp."
    )
    parser.add_argument("source", type=Path, help="Source PNG carrée, au moins 384 x 384 px")
    parser.add_argument("output_dir", type=Path, help="Nouveau dossier de sortie")
    args = parser.parse_args()

    if args.output_dir.exists():
        parser.error("La sortie existe déjà. Choisis un nouveau dossier.")
    try:
        generate_android_images(args.source, args.output_dir)
    except (OSError, ValueError) as error:
        parser.exit(1, f"Impossible de préparer les ressources : {error}\n")


if __name__ == "__main__":
    main()
