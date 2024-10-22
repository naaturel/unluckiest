package be.naaturel.unluckiest.configurations;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class AppConfigurations {

    @Value("${storage.location}")
    public String storageLocation = "";

    @Value("${sec.cors.authorizedHots}")
    public String[] authorizedHosts;

    @Value("${sec.cors.authorizedMethods}")
    public String[] authorizedMethods;

    @Value("${sec.cors.authorizedHeader}")
    public String[] authorizedHeaders;


}
