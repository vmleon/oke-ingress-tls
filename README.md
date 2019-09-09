# OKE Ingress TLS

## Install cert-manager

Follow the [official guide](https://docs.cert-manager.io/en/latest/getting-started/install/kubernetes.html#steps) to install using [Helm](https://helm.sh/).

Final install command:
```
helm install \
   --name cert-manager \
   --namespace cert-manager \
   --version v0.10.0 \
   --set ingressShim.defaultIssuerName=letsencrypt-prod \
   --set ingressShim.defaultIssuerKind=ClusterIssuer \
   jetstack/cert-manager
```

> NOTE for Brew (MacOS X users)
> `brew install kubernetes-helm` can have a latest and incompatible version of Helm
> Example: Error: incompatible versions client[v2.x.y] server[v2.z.q]
> More details on this Github [issue](https://github.com/helm/charts/issues/5239)
> Search the correct version commit on [Github Brew Helm](https://github.com/Homebrew/homebrew-core/search?q=kubernetes-helm&type=Commits)
> Find the Formula `kubernetes-helm.rb` raw file
> `$ brew unlink kubernetes-helm`
> `$ brew install <RAW_FILE_URL>`
> `$ brew switch kubernetes-helm x.y.z`


