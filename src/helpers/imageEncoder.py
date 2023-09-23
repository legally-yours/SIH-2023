from PIL import Image
import base64
import os
import io

def convert_image_to_base64(image_path, max_size):
    with Image.open(image_path) as img:
        img = img.convert("RGB")  # Convert to RGB mode
        img.thumbnail(max_size)
        buffered = io.BytesIO()
        img.save(buffered, format="JPEG")
        encoded_string = base64.b64encode(buffered.getvalue()).decode('utf-8')
    return encoded_string


def process_images_in_folder(folder_path, max_size):
    image_data = {}
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg") or filename.endswith(".png"): 
            image_path = os.path.join(folder_path, filename)
            base64_data = convert_image_to_base64(image_path, max_size)
            image_data[filename] = base64_data
    return image_data

def save_to_notepad(data, output_file):
    with open(output_file, "w") as notepad:
        for key, value in data.items():
            notepad.write(f"{key}: {value}\n")

input_folder_path = "C:\\Users\\Rohit Sinha\\Desktop\\SIHDraft\\SIH-2023\\src\\helpers\\inputImages"
output_notepad_path = "C:\\Users\\Rohit Sinha\\Desktop\\SIHDraft\\SIH-2023\\src\\helpers\\output.txt"
max_size = (800, 800)  

image_data = process_images_in_folder(input_folder_path, max_size)
save_to_notepad(image_data, output_notepad_path)
