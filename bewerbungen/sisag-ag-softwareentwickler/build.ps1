# Erzeugt anschreiben.pdf aus anschreiben.html in diesem Ordner.
$ErrorActionPreference = "Stop"
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$source = Join-Path $PSScriptRoot "anschreiben.html"
$output = Join-Path $PSScriptRoot "anschreiben.pdf"
$tmp = Join-Path $PSScriptRoot "output.pdf"

$uri = "file:///$($source -replace '\\','/')"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless", "--disable-gpu", "--no-pdf-header-footer",
    "--print-to-pdf=$tmp", "--print-to-pdf-no-header", $uri
) -Wait -NoNewWindow

if (-not (Test-Path $tmp)) { throw "PDF wurde nicht erzeugt: $tmp" }
Move-Item -Force $tmp $output
Write-Output "anschreiben.pdf erzeugt: $output"
