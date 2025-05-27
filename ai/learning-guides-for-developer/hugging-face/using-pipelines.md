# Using Hugging Face Pipelines for Inference

📖 **What This File Does**
This guide provides a step-by-step walkthrough for using Hugging Face `transformers` pipelines for common AI tasks (text, vision, audio) with practical examples and troubleshooting tips.

🔧 **Configuration Notes**
- Requires Python 3.7+
- Install `transformers` and (optionally) `torch`/`tensorflow` for best performance
- Internet connection needed for first model download

---

## 1. Install the Transformers Library

```bash
pip install transformers torch
```
- For GPU support, see [PyTorch install guide](https://pytorch.org/get-started/locally/).

---

## 2. Basic Usage: Text, Vision, and Audio Pipelines

### Text Generation
```python
from transformers import pipeline
generator = pipeline("text-generation", model="gpt2")
result = generator("Hello, world!", max_length=30)
print(result)
```
- **Tip:** Try other models like `distilgpt2` for faster inference.

### Sentiment Analysis
```python
sentiment = pipeline("sentiment-analysis")
print(sentiment("I love Hugging Face!"))
```
- **Tip:** Use `model="distilbert-base-uncased-finetuned-sst-2-english"` for consistent results.

### Image Classification
```python
image_classifier = pipeline("image-classification")
print(image_classifier("path/to/image.jpg"))
```
- **Tip:** Requires `Pillow` for image loading. Install with `pip install pillow`.

### Audio Classification
```python
audio_classifier = pipeline("audio-classification")
print(audio_classifier("path/to/audio.wav"))
```
- **Tip:** Requires `torchaudio` or `librosa` for audio file support.

---

## 3. Supported Tasks (with Example Pipeline Names)

- **Text:**
  - Generation: `text-generation`
  - Classification: `text-classification`, `sentiment-analysis`
  - Translation: `translation_en_to_fr`, etc.
  - Summarization: `summarization`
  - Question Answering: `question-answering`
- **Vision:**
  - Image Classification: `image-classification`
  - Object Detection: `object-detection`
- **Audio:**
  - Speech Recognition: `automatic-speech-recognition`
  - Audio Classification: `audio-classification`

See the [pipeline documentation](https://huggingface.co/docs/transformers/main_classes/pipelines) for more details and a full list of supported tasks.

---

## 4. Troubleshooting & Tips

- **Model Download Issues:**
  - Check your internet connection and Hugging Face account limits.
- **CUDA/GPU Errors:**
  - Ensure correct CUDA version and PyTorch install for GPU acceleration.
- **Missing Dependencies:**
  - Install `pillow`, `torchaudio`, or `librosa` as needed for vision/audio tasks.
- **Performance:**
  - Use smaller models for faster inference; batch inputs for efficiency.

---

## 5. Next Steps
- Try customizing pipelines with your own models (see advanced guide).
- Explore the Hugging Face Model Hub for more models and tasks. 