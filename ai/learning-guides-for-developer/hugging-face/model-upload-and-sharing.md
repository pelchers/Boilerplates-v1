# Uploading and Sharing Models on Hugging Face (Super-Guide)

This guide covers everything you need to know about uploading, documenting, versioning, and sharing your models on Hugging Face, using the web UI, CLI, and Python SDK. It also covers collaboration, licensing, security, best practices, troubleshooting, and real-world workflows.

---

## Table of Contents
- [Uploading and Sharing Models on Hugging Face (Super-Guide)](#uploading-and-sharing-models-on-hugging-face-super-guide)
  - [Table of Contents](#table-of-contents)
  - [1. Preparing Your Model](#1-preparing-your-model)
  - [2. Creating a Model Repository](#2-creating-a-model-repository)
    - [2.1. Web UI](#21-web-ui)
    - [2.2. CLI](#22-cli)
    - [2.3. Python SDK](#23-python-sdk)
  - [3. Uploading Your Model](#3-uploading-your-model)
    - [3.1. Web UI](#31-web-ui)
    - [3.2. CLI](#32-cli)
    - [3.3. Python SDK](#33-python-sdk)
    - [3.4. Large Files (LFS)](#34-large-files-lfs)
  - [4. Writing a Model Card (README)](#4-writing-a-model-card-readme)
  - [5. Versioning and Releases](#5-versioning-and-releases)
  - [6. Collaboration and Community](#6-collaboration-and-community)
  - [7. Licensing and Security](#7-licensing-and-security)
  - [8. Best Practices](#8-best-practices)
  - [9. Troubleshooting \& FAQ](#9-troubleshooting--faq)
  - [10. Real-World Workflows](#10-real-world-workflows)
    - [10.1. Sharing a Fine-Tuned Model](#101-sharing-a-fine-tuned-model)
    - [10.2. Collaborating in an Organization](#102-collaborating-in-an-organization)
    - [10.3. Publishing a Model for Inference API](#103-publishing-a-model-for-inference-api)
  - [11. Further Resources](#11-further-resources)

---

## 1. Preparing Your Model
- Save all model files (e.g., PyTorch `.bin`, TensorFlow `.h5`, ONNX, tokenizer, config, etc.).
- Test your model locally to ensure it loads and runs as expected.
- Prepare a README/model card describing your model, training data, intended use, and limitations.
- (Optional) Prepare example scripts or notebooks for users.

---

## 2. Creating a Model Repository

### 2.1. Web UI
- Go to [https://huggingface.co/models](https://huggingface.co/models) and click "Add a new model".
- Name your repo (e.g., `your-username/my-model`).
- Choose visibility (public/private), add tags, and select a license.

### 2.2. CLI
```bash
huggingface-cli repo create my-model
```

### 2.3. Python SDK
```python
from huggingface_hub import HfApi
api = HfApi()
api.create_repo(name="my-model", token="YOUR_HF_TOKEN")
```

---

## 3. Uploading Your Model

### 3.1. Web UI
- Drag and drop files into the repo page, or use the "Upload files" button.

### 3.2. CLI
```bash
huggingface-cli repo clone your-username/my-model
cd my-model
# Add files (model, tokenizer, config, README, etc.)
git add .
git commit -m "Initial model upload"
git push
```

### 3.3. Python SDK
```python
from huggingface_hub import HfApi
api = HfApi()
api.upload_folder(
    folder_path="./my-model",
    repo_id="your-username/my-model",
    token="YOUR_HF_TOKEN"
)
```

### 3.4. Large Files (LFS)
- For files >10MB, use Git LFS (Large File Storage):
  ```bash
  git lfs install
  git lfs track "*.bin"
  git add .gitattributes
  git add *.bin
  git commit -m "Add large model files"
  git push
  ```

---

## 4. Writing a Model Card (README)

- Every model should have a `README.md` (model card) in the root of the repo.
- Include:
  - Model description and intended use
  - Training data and methodology
  - Evaluation results and limitations
  - Example usage code
  - Citation and license info
- See [model card guide](https://huggingface.co/docs/hub/model-cards) for templates and best practices.

---

## 5. Versioning and Releases

- Use Git tags for releases:
  ```bash
  git tag v1.0.0
  git push origin v1.0.0
  ```
- Use branches for development and stable versions.
- Document changes in a `CHANGELOG.md`.
- Use the Hub's "Releases" feature to highlight major updates.

---

## 6. Collaboration and Community

- Add collaborators via the repo settings (web UI) or via orgs.
- Use pull requests for contributions and improvements.
- Enable Discussions for Q&A and feedback.
- Respond to issues and community questions.
- Join or create an Organization for team projects.

---

## 7. Licensing and Security

- Choose an appropriate license (MIT, Apache-2.0, CC, etc.).
- Clearly state any restrictions or requirements in the model card.
- For private/proprietary models, use private repos and restrict access.
- Never upload sensitive or private data.
- Review model outputs for safety and bias before sharing.

---

## 8. Best Practices

- Test your model before uploading.
- Provide example code and usage instructions.
- Use semantic versioning for releases.
- Keep your model card up to date.
- Monitor downloads and feedback.
- Regularly update your model with improvements or bug fixes.

---

## 9. Troubleshooting & FAQ

- **Model not loading?** Check file names, config, and dependencies.
- **Large files not uploading?** Use Git LFS.
- **Permission errors?** Check repo visibility and collaborator settings.
- **API errors?** Check your token scope and rate limits.
- **Model card not rendering?** Validate your Markdown and YAML frontmatter.

---

## 10. Real-World Workflows

### 10.1. Sharing a Fine-Tuned Model
- Fine-tune a model locally or on Colab.
- Save model and tokenizer with `model.save_pretrained()` and `tokenizer.save_pretrained()`.
- Upload to a new repo as above.
- Share the link and example code with your team or the community.

### 10.2. Collaborating in an Organization
- Create an org, add members, and manage shared repos.
- Use branches and pull requests for collaborative development.
- Set up CI/CD for automated testing and deployment.

### 10.3. Publishing a Model for Inference API
- Upload your model and ensure it has a valid model card.
- Test with the Inference API (web UI or Python).
- Announce your model in the community or on social media.

---

## 11. Further Resources
- [Model Sharing Guide](https://huggingface.co/docs/hub/model-repos)
- [Model Card Templates](https://huggingface.co/docs/hub/model-cards)
- [Git LFS Guide](https://git-lfs.github.com/)
- [Hugging Face Forums](https://discuss.huggingface.co/)
- [Hugging Face Hub API](https://huggingface.co/docs/hub/api)

---

With these steps, you can confidently share, document, and collaborate on models with the Hugging Face community! 