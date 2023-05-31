export function generateAvatar(): string {
    const pixelArts = [
        "Max_ctzin7",
        "Oreo_bglowz",
        "Bailey_ofiegc",
        "Misty_pzvdaz",
        "Molly_ot1egr",
        "Scooter_v0dcjl",
        "Garfield_sqmmim",
        "Chester_hifwo7",
        "Kiki_guacg9",
        "Gracie_vmx7fg",
        "Daisy_zsx4gp",
        "George_uhyhyt"
    ]
    const baseURL = "https://api.dicebear.com/6.x/pixel-art/svg?seed=";
    pixelArts.sort(() => 0.5 - Math.random());
    return baseURL + pixelArts[0];
}

