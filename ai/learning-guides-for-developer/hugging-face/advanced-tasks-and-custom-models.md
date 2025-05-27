# Advanced Hugging Face: Fine-Tuning, Custom Models, and Deployment

📖 **What This File Does**
This guide covers advanced workflows with Hugging Face Transformers: fine-tuning, custom model creation, and deployment for production.

🔧 **Configuration Notes**
- Requires Python 3.7+, `transformers`, `datasets`, and `torch` (or `tensorflow`)
- GPU recommended for training/fine-tuning
- Internet access needed for model/dataset downloads

---

## 1. Fine-Tuning a Pretrained Model (Step-by-Step)

### a. Install Required Packages
```bash
pip install transformers datasets torch
```

### b. Load Model, Tokenizer, and Dataset
```python
from transformers import Trainer, TrainingArguments, AutoModelForSequenceClassification, AutoTokenizer
from datasets import load_dataset

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
dataset = load_dataset("imdb")
```

### c. Preprocess and Tokenize Data
```python
def preprocess(example):
    return tokenizer(example["text"], truncation=True, padding="max_length", max_length=128)
dataset = dataset.map(preprocess, batched=True)
```

### d. Set Up Training Arguments and Trainer
```python
training_args = TrainingArguments(output_dir="./results", num_train_epochs=1, per_device_train_batch_size=8)
trainer = Trainer(model=model, args=training_args, train_dataset=dataset["train"], eval_dataset=dataset["test"])
```

### e. Train the Model
```python
trainer.train()
```

- **Tip:** Adjust `num_train_epochs` and batch size for your hardware.
- **Troubleshooting:** Out-of-memory errors? Lower batch size or use a smaller model.

---

## 2. Using Custom Models

- Subclass `PreTrainedModel` to define your own architecture.
- Register and push to the Hugging Face Hub for sharing.
- Example: [Custom model guide](https://huggingface.co/docs/transformers/model_sharing)

---

## 3. Deployment (Step-by-Step)

### a. Hugging Face Inference API (Hosted)
- Upload your model to the Hub and use the hosted API endpoint.
- See [Inference API docs](https://huggingface.co/inference-api).

### b. Local Deployment with FastAPI
```python
from fastapi import FastAPI
from transformers import pipeline
app = FastAPI()
generator = pipeline("text-generation", model="gpt2")

@app.post("/generate")
def generate(prompt: str):
    return generator(prompt)
```
- Run with: `uvicorn yourfile:app --reload`

### c. Dockerize for Production
- Create a `Dockerfile` with your app and dependencies.
- Expose the API for scalable deployment.

---

## 4. Best Practices & Troubleshooting
- Use environment variables for secrets and config.
- Monitor memory/CPU usage during training and inference.
- For large models, consider ONNX export or quantization for speed.

---

For more, see the [Hugging Face advanced guides](https://huggingface.co/docs/transformers/training). 