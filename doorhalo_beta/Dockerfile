ARG BUILD_FROM=ghcr.io/home-assistant/aarch64-base:3.19
FROM $BUILD_FROM

# Install Python and pip
RUN apk add --no-cache python3 py3-pip

WORKDIR /app

# Copy and install Python dependencies
COPY requirements.txt .
RUN pip3 install --no-cache-dir --break-system-packages -r requirements.txt

# Copy S6-overlay service configurations
COPY rootfs/ /

# Ensure execution permissions on S6 scripts
RUN chmod a+x /etc/services.d/doorhalo/run

# Copy application code
COPY app/ /app/

ARG BUILD_VERSION
LABEL \
    io.hass.version="${BUILD_VERSION}" \
    io.hass.type="app" \
    io.hass.arch="aarch64|amd64"
